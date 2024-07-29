const POST_GRAPHQL_FIELDS = `
    sys {
        id
        firstPublishedAt
        publishedAt
    }
    title
    slug
    date
    tags
    body
    category {
        name
    }
`;

function fetchGraphQL(query: string, preview = false): Promise<any> {
    return fetch(
        `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${
                    preview
                        ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
                        : process.env.CONTENTFUL_ACCESS_TOKEN
                }`,
            },
            body: JSON.stringify({ query }),
            cache: 'force-cache',
            next: {
                tags: ['posts'],
            },
        },
    ).then((response) => response.json());
}

function extractPost(fetchResponse: any): any {
    return fetchResponse?.data?.articleCollection?.items?.[0];
}

function extractPostEntries(fetchResponse: any): any[] {
    return fetchResponse?.data?.articleCollection?.items;
}

export async function getPreviewPostBySlug(slug: string | null): Promise<any> {
    const entry = await fetchGraphQL(
        `query {
      articleCollection(where: { slug: "${slug}" }, preview: true, limit: 1) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
        true,
    );
    return extractPost(entry);
}

export async function getAllPosts(
    isDraftMode: boolean,
    { skip, limit },
): Promise<any[]> {
    const entries = await fetchGraphQL(
        `query {
          articleCollection(order: date_DESC, preview: ${
              isDraftMode ? 'true' : 'false'
          }, limit: ${limit}, skip: ${skip}) {
            items {
              ${POST_GRAPHQL_FIELDS}
            }
          }
        }`,
        isDraftMode,
    );
    return extractPostEntries(entries);
}

export async function getFeaturedPosts(isDraftMode: boolean) {
    const entries = await fetchGraphQL(
        `
      query {
          articleCollection(limit: 3, order: date_DESC, preview: ${isDraftMode ? 'true' : 'false'}) {
            items {
              ${POST_GRAPHQL_FIELDS}
            }
          }
        }
    `,
        isDraftMode,
    );

    return extractPostEntries(entries);
}

export async function getPostAndMorePosts(
    slug: string,
    preview: boolean,
): Promise<any> {
    const entry = await fetchGraphQL(
        `query {
      articleCollection(where: { slug: "${slug}" }, preview: ${
          preview ? 'true' : 'false'
      }, limit: 1) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
        preview,
    );
    const entries = await fetchGraphQL(
        `query {
      articleCollection(where: { slug_not_in: "${slug}" }, order: date_DESC, preview: ${
          preview ? 'true' : 'false'
      }, limit: 4) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
        preview,
    );
    return {
        post: extractPost(entry),
        morePosts: extractPostEntries(entries),
    };
}

export async function getPostCount() {
    const entries = await fetchGraphQL(`
      query {
          articleCollection {
            total
          }
        }
    `);

    return entries?.data?.articleCollection?.total;
}

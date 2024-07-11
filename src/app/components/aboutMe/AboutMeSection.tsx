import { Section } from '@/components/ui/Section';
import { SectionContent } from '@/components/ui/SectionContent';

function Progress() {
    return (
        <svg
            width="81"
            height="80"
            viewBox="0 0 81 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="40.5" cy="40" r="36" stroke="white" strokeWidth="8" />
            <path
                d="M40.5 4.4215C40.5 1.97957 42.4856 -0.0252952 44.9126 0.244053C52.8404 1.12387 60.3615 4.35984 66.4779 9.58376C73.7201 15.7692 78.5176 24.3358 80.0075 33.7426C81.4974 43.1495 79.5819 52.7793 74.6056 60.8999C69.6293 69.0206 61.9187 75.0992 52.8607 78.0423C43.8027 80.9854 33.9918 80.5999 25.1927 76.9552C16.3935 73.3104 9.18359 66.6457 4.85973 58.1596C0.535874 49.6735 -0.61816 39.9231 1.60521 30.6622C3.48296 22.8408 7.66563 15.802 13.5622 10.4304C15.3674 8.78594 18.1522 9.24082 19.5875 11.2164C21.0228 13.1919 20.5579 15.9368 18.8052 17.6371C14.5874 21.7289 11.5897 26.9541 10.2039 32.7265C8.47203 39.9401 9.37093 47.535 12.7389 54.145C16.1069 60.755 21.7228 65.9464 28.5767 68.7853C35.4306 71.6243 43.0725 71.9245 50.128 69.6321C57.1835 67.3396 63.1895 62.6049 67.0657 56.2795C70.9419 49.9541 72.4339 42.4532 71.2734 35.126C70.1129 27.7987 66.376 21.126 60.7349 16.308C56.2207 12.4526 50.7243 9.98731 44.9069 9.15615C42.4895 8.81077 40.5 6.86342 40.5 4.4215Z"
                fill="#2563EB"
            />
            <path
                d="M30.2 45.196C29.472 45.196 28.8467 45.0747 28.324 44.832C27.8013 44.58 27.4 44.23 27.12 43.782C26.84 43.3247 26.7 42.7927 26.7 42.186H28.198C28.198 42.6713 28.3567 43.0773 28.674 43.404C29.0007 43.7213 29.5093 43.88 30.2 43.88C30.9 43.88 31.4367 43.6933 31.81 43.32C32.1833 42.9467 32.37 42.438 32.37 41.794V40.618H32.146C31.9873 40.842 31.7307 41.0567 31.376 41.262C31.0213 41.4673 30.508 41.57 29.836 41.57C29.2667 41.57 28.7393 41.444 28.254 41.192C27.7687 40.94 27.3767 40.5807 27.078 40.114C26.7887 39.638 26.644 39.0733 26.644 38.42V38.252C26.644 37.5987 26.7933 37.0293 27.092 36.544C27.4 36.0587 27.8247 35.6807 28.366 35.41C28.9167 35.1393 29.5467 35.004 30.256 35.004C30.9747 35.004 31.6 35.144 32.132 35.424C32.6733 35.6947 33.0933 36.0773 33.392 36.572C33.6907 37.0573 33.84 37.6313 33.84 38.294V41.682C33.84 42.4473 33.686 43.0913 33.378 43.614C33.0793 44.1367 32.6547 44.5333 32.104 44.804C31.5627 45.0653 30.928 45.196 30.2 45.196ZM30.242 40.38C30.6713 40.38 31.0447 40.296 31.362 40.128C31.6793 39.96 31.9267 39.7313 32.104 39.442C32.2813 39.1433 32.37 38.7933 32.37 38.392V38.28C32.37 37.6733 32.174 37.1973 31.782 36.852C31.3993 36.4973 30.886 36.32 30.242 36.32C29.598 36.32 29.08 36.4973 28.688 36.852C28.3053 37.1973 28.114 37.6733 28.114 38.28V38.392C28.114 38.7933 28.198 39.1433 28.366 39.442C28.5433 39.7313 28.7907 39.96 29.108 40.128C29.4347 40.296 29.8127 40.38 30.242 40.38ZM39.1213 45.196C37.9826 45.196 37.0726 44.874 36.3913 44.23C35.7193 43.5767 35.3833 42.5967 35.3833 41.29V38.91C35.3833 37.6313 35.7193 36.6607 36.3913 35.998C37.0726 35.3353 37.9826 35.004 39.1213 35.004C40.2693 35.004 41.1793 35.3353 41.8513 35.998C42.5326 36.6607 42.8733 37.6313 42.8733 38.91V41.29C42.8733 42.5967 42.5326 43.5767 41.8513 44.23C41.1793 44.874 40.2693 45.196 39.1213 45.196ZM39.1213 43.88C39.8959 43.88 40.4699 43.6607 40.8433 43.222C41.2166 42.774 41.4033 42.1487 41.4033 41.346V38.826C41.4033 38.0233 41.2026 37.4073 40.8013 36.978C40.3999 36.5393 39.8399 36.32 39.1213 36.32C38.3933 36.32 37.8333 36.544 37.4413 36.992C37.0493 37.4307 36.8533 38.042 36.8533 38.826V41.346C36.8533 42.1673 37.0399 42.7973 37.4133 43.236C37.7959 43.6653 38.3653 43.88 39.1213 43.88ZM45.6107 45.182L44.7147 44.454L52.3727 35.018L53.2687 35.746L45.6107 45.182ZM51.6727 45.154C50.9821 45.154 50.4361 44.9627 50.0347 44.58C49.6334 44.188 49.4327 43.6607 49.4327 42.998V42.914C49.4327 42.242 49.6334 41.7147 50.0347 41.332C50.4361 40.94 50.9821 40.744 51.6727 40.744C52.3541 40.744 52.9001 40.94 53.3107 41.332C53.7214 41.7147 53.9267 42.242 53.9267 42.914V42.998C53.9267 43.6607 53.7214 44.188 53.3107 44.58C52.9094 44.9627 52.3634 45.154 51.6727 45.154ZM51.6727 44.174C52.0087 44.174 52.2701 44.0713 52.4567 43.866C52.6527 43.6607 52.7507 43.39 52.7507 43.054V42.858C52.7507 42.5127 52.6527 42.2373 52.4567 42.032C52.2701 41.8267 52.0087 41.724 51.6727 41.724C51.3461 41.724 51.0847 41.8267 50.8887 42.032C50.7021 42.2373 50.6087 42.5127 50.6087 42.858V43.054C50.6087 43.39 50.7021 43.6607 50.8887 43.866C51.0847 44.0713 51.3461 44.174 51.6727 44.174ZM46.3107 39.456C45.6201 39.456 45.0694 39.2647 44.6587 38.882C44.2574 38.49 44.0567 37.9627 44.0567 37.3V37.202C44.0567 36.53 44.2574 36.0027 44.6587 35.62C45.0694 35.2373 45.6201 35.046 46.3107 35.046C46.9921 35.046 47.5334 35.2373 47.9347 35.62C48.3454 36.0027 48.5507 36.53 48.5507 37.202V37.3C48.5507 37.9627 48.3501 38.49 47.9487 38.882C47.5474 39.2647 47.0014 39.456 46.3107 39.456ZM46.3107 38.476C46.6374 38.476 46.8941 38.3733 47.0807 38.168C47.2767 37.9533 47.3747 37.678 47.3747 37.342V37.146C47.3747 36.81 47.2767 36.5393 47.0807 36.334C46.8941 36.1287 46.6374 36.026 46.3107 36.026C45.9747 36.026 45.7087 36.1287 45.5127 36.334C45.3261 36.5393 45.2327 36.81 45.2327 37.146V37.342C45.2327 37.678 45.3261 37.9533 45.5127 38.168C45.7087 38.3733 45.9747 38.476 46.3107 38.476Z"
                fill="#020617"
            />
        </svg>
    );
}

function ProgressFull() {
    return (
        <svg
            width="81"
            height="80"
            viewBox="0 0 81 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="40.5" cy="40" r="36" stroke="white" strokeWidth="8" />
            <path
                d="M80.5 40C80.5 62.0914 62.5914 80 40.5 80C18.4086 80 0.5 62.0914 0.5 40C0.5 17.9086 18.4086 0 40.5 0C62.5914 0 80.5 17.9086 80.5 40ZM9.34299 40C9.34299 57.2075 23.2925 71.157 40.5 71.157C57.7075 71.157 71.657 57.2075 71.657 40C71.657 22.7925 57.7075 8.84299 40.5 8.84299C23.2925 8.84299 9.34299 22.7925 9.34299 40Z"
                fill="#2563EB"
            />
            <path
                d="M26.598 45V36.236H26.374L24.764 39.54H23.21L25.38 35.2H28.068V45H26.598ZM33.592 45.196C32.4533 45.196 31.5433 44.874 30.862 44.23C30.19 43.5767 29.854 42.5967 29.854 41.29V38.91C29.854 37.6313 30.19 36.6607 30.862 35.998C31.5433 35.3353 32.4533 35.004 33.592 35.004C34.74 35.004 35.65 35.3353 36.322 35.998C37.0033 36.6607 37.344 37.6313 37.344 38.91V41.29C37.344 42.5967 37.0033 43.5767 36.322 44.23C35.65 44.874 34.74 45.196 33.592 45.196ZM33.592 43.88C34.3667 43.88 34.9407 43.6607 35.314 43.222C35.6873 42.774 35.874 42.1487 35.874 41.346V38.826C35.874 38.0233 35.6733 37.4073 35.272 36.978C34.8707 36.5393 34.3107 36.32 33.592 36.32C32.864 36.32 32.304 36.544 31.912 36.992C31.52 37.4307 31.324 38.042 31.324 38.826V41.346C31.324 42.1673 31.5107 42.7973 31.884 43.236C32.2667 43.6653 32.836 43.88 33.592 43.88ZM42.6154 45.196C41.4768 45.196 40.5668 44.874 39.8854 44.23C39.2134 43.5767 38.8774 42.5967 38.8774 41.29V38.91C38.8774 37.6313 39.2134 36.6607 39.8854 35.998C40.5668 35.3353 41.4768 35.004 42.6154 35.004C43.7634 35.004 44.6734 35.3353 45.3454 35.998C46.0268 36.6607 46.3674 37.6313 46.3674 38.91V41.29C46.3674 42.5967 46.0268 43.5767 45.3454 44.23C44.6734 44.874 43.7634 45.196 42.6154 45.196ZM42.6154 43.88C43.3901 43.88 43.9641 43.6607 44.3374 43.222C44.7108 42.774 44.8974 42.1487 44.8974 41.346V38.826C44.8974 38.0233 44.6968 37.4073 44.2954 36.978C43.8941 36.5393 43.3341 36.32 42.6154 36.32C41.8874 36.32 41.3274 36.544 40.9354 36.992C40.5434 37.4307 40.3474 38.042 40.3474 38.826V41.346C40.3474 42.1673 40.5341 42.7973 40.9074 43.236C41.2901 43.6653 41.8594 43.88 42.6154 43.88ZM49.1049 45.182L48.2089 44.454L55.8669 35.018L56.7629 35.746L49.1049 45.182ZM55.1669 45.154C54.4762 45.154 53.9302 44.9627 53.5289 44.58C53.1275 44.188 52.9269 43.6607 52.9269 42.998V42.914C52.9269 42.242 53.1275 41.7147 53.5289 41.332C53.9302 40.94 54.4762 40.744 55.1669 40.744C55.8482 40.744 56.3942 40.94 56.8049 41.332C57.2155 41.7147 57.4209 42.242 57.4209 42.914V42.998C57.4209 43.6607 57.2155 44.188 56.8049 44.58C56.4035 44.9627 55.8575 45.154 55.1669 45.154ZM55.1669 44.174C55.5029 44.174 55.7642 44.0713 55.9509 43.866C56.1469 43.6607 56.2449 43.39 56.2449 43.054V42.858C56.2449 42.5127 56.1469 42.2373 55.9509 42.032C55.7642 41.8267 55.5029 41.724 55.1669 41.724C54.8402 41.724 54.5789 41.8267 54.3829 42.032C54.1962 42.2373 54.1029 42.5127 54.1029 42.858V43.054C54.1029 43.39 54.1962 43.6607 54.3829 43.866C54.5789 44.0713 54.8402 44.174 55.1669 44.174ZM49.8049 39.456C49.1142 39.456 48.5635 39.2647 48.1529 38.882C47.7515 38.49 47.5509 37.9627 47.5509 37.3V37.202C47.5509 36.53 47.7515 36.0027 48.1529 35.62C48.5635 35.2373 49.1142 35.046 49.8049 35.046C50.4862 35.046 51.0275 35.2373 51.4289 35.62C51.8395 36.0027 52.0449 36.53 52.0449 37.202V37.3C52.0449 37.9627 51.8442 38.49 51.4429 38.882C51.0415 39.2647 50.4955 39.456 49.8049 39.456ZM49.8049 38.476C50.1315 38.476 50.3882 38.3733 50.5749 38.168C50.7709 37.9533 50.8689 37.678 50.8689 37.342V37.146C50.8689 36.81 50.7709 36.5393 50.5749 36.334C50.3882 36.1287 50.1315 36.026 49.8049 36.026C49.4689 36.026 49.2029 36.1287 49.0069 36.334C48.8202 36.5393 48.7269 36.81 48.7269 37.146V37.342C48.7269 37.678 48.8202 37.9533 49.0069 38.168C49.2029 38.3733 49.4689 38.476 49.8049 38.476Z"
                fill="#020617"
            />
        </svg>
    );
}

export function AboutMeSection() {
    return (
        <Section title="About Me">
            <div className="flex flex-col 2xl:flex-row gap-4">
                <SectionContent className="flex-grow">
                    <span className="text-base text-dark-gray dark:text-white/70">
                        My expertise extends across a broad range of
                        technologies and methodologies, including Agile and
                        Scrum, making me adept at navigating the complexities of
                        software development. Beyond technical skills, I am
                        passionate about mentoring and fostering a culture of
                        continuous improvement and innovation within my teams.
                        My journey in the tech industry is fueled by a
                        relentless pursuit of knowledge, a deep-seated love for
                        solving comple problems, and a belief in the power of
                        teamwork and effective communication to drive project
                        success.
                    </span>
                </SectionContent>

                <SectionContent className="w-[225px] min-w-[225px] flex flex-col justify-between">
                    <div className="flex flex-col gap-1">
                        <span className="text-base text-dark-gray dark:text-white/70 font-medium">
                            Age:{' '}
                            <span className="text-dark dark:text-white">
                                28
                            </span>
                        </span>
                        <span className="text-base text-dark-gray dark:text-white/70 font-medium">
                            Location:{' '}
                            <span className="text-dark dark:text-white">
                                Chicago
                            </span>
                        </span>
                    </div>
                    <div className="flex flex-row gap-4 self-center">
                        <div className="flex flex-col gap-1">
                            <Progress />
                            <span className="text-sm text-dark dark:text-white text-center">
                                English
                            </span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <ProgressFull />
                            <span className="text-sm text-dark dark:text-white text-center">
                                Ukrainian
                            </span>
                        </div>
                    </div>
                </SectionContent>
            </div>
        </Section>
    );
}

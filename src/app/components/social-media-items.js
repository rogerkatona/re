// components/SocialMediaItem.js

import Link from "next/link";

const SocialMedia = props => (
    <div className="filter transition duration-500 ease-in-out hover:brightness-75 px-2 -ml-2 ">
        <Link
            href={props.path}
            target={props.target}
            rel="noreferrer">
            <span>
                <img
                    src={props.src}
                    height={32}
                    width={32}
                    alt={props.alt}
                />
            </span>
        </Link>
    </div>
);

const SocialMediaItem = props => (
    <>
        {props.socialMediaItems.map(item => (
            <SocialMedia
                key={item.src}
                path={item.path}
                alt={item.alt}
                src={item.src}
            />
        ))}
    </>
);

export default SocialMediaItem;

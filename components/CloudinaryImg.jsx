import Image from 'next/image';
import { buildUrl } from 'cloudinary-build-url';

export default function CloudinaryImg({
    src,
    height,
    width,
    alt = 'Project Image',
    title,
    className,
    effect = 'grayscale',
}) {
    const urlBlurred = buildUrl(src, {
        cloud: {
            cloudName: 'sxceosleague',
        },
        transformations: {
            effect: {
                name: effect,
            },
            quality: 1,
        },
    });
    const url = buildUrl(src, {
        cloud: {
            cloudName: 'sxceosleague',
        },
    });

    return (
        <div
            className={className}
            style={{
                position: 'relative',
                height: 0,
                paddingTop: `${(height / width) * 100}%`,
                backgroundImage: `url(${urlBlurred})`,
                backgroundPosition: 'center center',
                backgroundSize: `100%`,
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                }}
            >
                <Image
                    width={width}
                    height={height}
                    src={url}
                    alt={alt}
                    title={title}
                />
            </div>
        </div>
    );
}

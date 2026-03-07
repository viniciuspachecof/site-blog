import Image, { ImageProps } from 'next/image';

type AvatarImageProps = ImageProps;

export const AvatarImage = ({ src, alt, width = 40, height = 40, ...rest }: AvatarImageProps) => {
  const safeSrc = typeof src === 'string' ? src.trim() : src;

  return <Image {...rest} src={safeSrc} alt={alt} width={width} height={height} />;
};

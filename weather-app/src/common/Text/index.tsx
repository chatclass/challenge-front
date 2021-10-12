import { MainText, SubText, NormalText } from './styles';

interface TextProps {
  text: string;
  color?: string;
  weight?: string;
  size?: string;
  type?: string;
}

export const Text = ({ text, color, weight, size, type }: TextProps) => {
  const Component =
    type === 'h1' ? MainText : type === 'h2' ? SubText : NormalText;

  return (
    <Component color={color} weight={weight} size={size}>
      {text}
    </Component>
  );
};

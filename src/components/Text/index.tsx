import React from "react";
import styled from "styled-components";
import { BaseElementProps } from "../../types/BaseElementProps";
import { Size } from "../../types/size";
import theme from "../../theme";

export interface TextProps extends BaseElementProps {
  /**
   * **Props that affect/augment styling of the Text component.**
   */
  size: Size;
  color?: string;
  lineHeight?: string;
  align?: "left" | "right" | "center" | "justify";
  // heading?: boolean; // affects font family
  fontFamily?: "heading" | "body" | "name";
  underline?: boolean;
  bold?: boolean;
  light?: boolean;
  medium?: boolean;
  regular?: boolean;
  selected?: boolean;
  transform?: string;
  transitionDuration?: string;

  /**
   * What HTML element type to use to render the component.
   */
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";

  /**
   * Specifies a predefined set of styles to apply to the Text component.
   * If `variant` is supplied, its styles can be overriden by specifying individual
   * styles as props.
   */
  variant?: string;
}

const BaseText = styled.span<TextProps>`
  font-family: ${({fontFamily}) => fontFamily ? theme.fontFamily[fontFamily] : theme.fontFamily["heading"]};
  font-size:  ${({ size = Size.MEDIUM }) => `${theme.fontSize[size]}px` || `${size}px`};
  color: ${({ color = "" }) => theme.color[color] || color || "inherit"};
  text-decoration-color: ${({ color = "" }) =>
    theme.color[color] || color || "inherit"};
  line-height: ${({ lineHeight }) => lineHeight};
  text-align: ${({ align = "left" }) => align};
  ${({ underline }) => underline && `text-decoration: underline;`}
  ${({ bold }) => bold && `font-weight: bold;`}
  ${({ light }) => light && `font-weight: light;`}
  ${({ medium }) => medium && `font-weight: medium;`}
  ${({ italic }) => italic && `font-style: italic;`}
  margin: 0;
  padding: 0;
  transform: ${({ transform }) => transform};
  transition-duration: ${({ transitionDuration }) => transitionDuration};
`;

const mapText = (
  id: string | undefined,
  type: Props['type'],
  className: string | undefined,
  selected: Props['selected'],
  children: React.ReactNode
): JSX.Element =>  {
  switch(type) {
    case "h1":
      return <BaseText
        id={id}
        as={type}
        className={className}
        size={Size.XLARGE}
        color={theme.color.offBlack}
        bold
      >
        {children}
      </BaseText>;
    case "h2":
      return <BaseText
        id={id}
        as={type}
        className={className}
        size={Size.XLARGE}
        color={selected ? theme.color.offBlack : theme.color.darkGrey}
      >
        {children}
      </BaseText>;
    case "h3":
      return <BaseText
        id={id}
        as={type}
        className={className}
        size={Size.LARGE}
        color={theme.color.darkGrey}
      >
        {children}
      </BaseText>;
    case "h4":
      return <BaseText
        id={id}
        as={type}
        className={className}
        size={Size.MEDIUM}
        color={theme.color.offBlack}
      >
        {children}
      </BaseText>;
    case "body":
      return <BaseText
        id={id}
        as={"p"}
        className={className}
        size={Size.MEDIUM}
        color={theme.color.darkGrey}
        light
      >
        {children}
      </BaseText>;
    case "name":
      return <BaseText
        id={id}
        as={"p"}
        fontFamily="name"
        className={className}
        size={Size.MEDIUM}
        color={theme.color.offBlack}
        medium
      >
        {children}
      </BaseText>;
    case "menu":
      return <BaseText
        id={id}
        as={"p"}
        fontFamily="body"
        className={className}
        size={Size.MEDIUM}
        color={selected ? theme.color.offBlack : theme.color.darkGrey}
        bold={selected}
      >
        {children}
      </BaseText>;
    default:
      return <BaseText
        id={id}
        as={type}
        className={className}
        size={Size.XLARGE}
        color={theme.color.offBlack}
        bold
      >
        {children}
      </BaseText>;
  }
}

interface Props {
  type?: "h1" | "h2" | "h3" | "h4" | "body" | "name" | "menu";
  selected?: boolean;
  id?: BaseElementProps['id'];
  className?: BaseElementProps['className'];
};

const Text: React.FC<Props> = ({ children, type, id, className, selected}) => {
  return mapText(id, type, className, selected, children);
};

export default Text;

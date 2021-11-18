import { Props as DivProps } from "@kits/Div/DivProps";
import { ImageQuality } from "@helpers/image";

type layoutTypes = "intrinsic" | "fixed" | "responsive" | "fill";
type srcTypes =
  | String
  | {
      blurDataURL: String,
      src: String,
      height: Number,
      width: Number,
    };
type placeholderTypes = "blur" | "empty";

// just for intellisense
export interface Props extends DivProps {
  fit?: String;
  src: srcTypes;
  hash: String;
  alt?: String;
  serverQuality?: ImageQuality;
  placeholder?: placeholderTypes;
  blurDataURL?: String;
  quality?: Number;
  priority?: Boolean;
  unoptimized?: Boolean;
  objectPosition?: String;
  layout?: layoutTypes;
  loader?: Function;
  withShimmer?: Boolean;
}

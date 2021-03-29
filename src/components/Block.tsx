import creativeBlock from "./creativeBlock.png";

export const Block: React.FC<{}> = (props) => {
  return (
    <img
      style={{
        position: "absolute",
        top: props.block.y,
        left: props.block.x,
        width: "100px",
      }}
      alt="creative-block"
      src={creativeBlock}
    />
  );
};

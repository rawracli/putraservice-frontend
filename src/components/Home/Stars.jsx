import { Rating } from "react-simple-star-rating";

const Stars = ({ style, initialRating, readonly, props }) => {
  // Catch Rating value
  return (
    <div className="App">
      <Rating
        initialValue={initialRating}
        readonly={readonly}
        allowHover={!readonly}
        allowFraction={true}
        allowTitleTag={false}
        // horizontal stars
        emptyStyle={{ display: "flex" }}
        SVGstyle={{ display: "inline-block", marginBottom: 10, ...style }}
        style={{ marginBottom: -10, cursor: readonly ? 'default' : 'pointer' }}
        {...props}
      />
    </div>
  );
}

export default Stars;
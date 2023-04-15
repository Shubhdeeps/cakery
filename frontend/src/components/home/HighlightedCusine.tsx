import highlightedDish from "../../assets/dishes/highlighted_dish.png";

import Box from "@material-ui/core/Box";

export default function HighlightedCusine() {
  return (
    <Box>
      <img width="100%" src={highlightedDish} className="highlighted_leaf" />
    </Box>
  );
}

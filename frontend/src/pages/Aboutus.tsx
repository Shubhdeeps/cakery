import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import cover from "../assets/cakes/cover.jpg";
export default function Aboutus() {
  return (
    <Box
      sx={{
        mt: "100px",
      }}
      display="flex"
      gap={3}
      alignItems="start"
    >
      <Box>
        <Typography variant="h5">
          Welcome to CakeMyDay Bakery! We are a passionate team of bakers and
          cake decorators dedicated to creating beautiful and delicious cakes
          for any occasion.
        </Typography>
        <br />
        <Typography variant="body1">
          Our journey started with a simple idea – to bring joy to people's
          lives with the perfect cake. We started baking cakes for friends and
          family, and word quickly spread about our delicious creations. Before
          we knew it, we had requests pouring in for weddings, birthdays, and
          other special events.
        </Typography>
        <br />
        <Typography variant="body1">
          At CakeMyDay Bakery, we believe that every cake is a work of art.
          That's why we use only the finest ingredients to create cakes that are
          not only delicious but also stunning to look at. Our team of talented
          bakers and decorators work tirelessly to bring your vision to life and
          make your event even more special.
        </Typography>
        <br />
        <Typography variant="body1">
          We are proud to offer a wide range of flavors and styles to suit any
          taste and occasion. From classic vanilla and chocolate cakes to more
          exotic flavors like mango and raspberry, we have something for
          everyone. And if you don't see what you're looking for, just let us
          know – we love a challenge!
        </Typography>
        <br />
        <Typography variant="body1">
          At CakeMyDay Bakery, we are committed to providing exceptional service
          and making your experience with us unforgettable. We believe that
          every celebration deserves a cake, and we can't wait to be a part of
          your special moment. Thank you for choosing CakeMyDay Bakery – we look
          forward to serving you!
        </Typography>
      </Box>
      <Box
        sx={{
          height: "80vh",
          width: "70vw",
        }}
      >
        <img width="100%" height="100%" src={cover} />
      </Box>
    </Box>
  );
}

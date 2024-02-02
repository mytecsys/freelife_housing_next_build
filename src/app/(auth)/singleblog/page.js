import { Box, Typography } from "@mui/material";

export default function SingleBlog() {
  return (
    <>
      <Box>
        <Typography variant="h6" fontWeight={700} textAlign={"center"} mt={2}>
          Single blog design
        </Typography>
        <Box style={{ margin: "20px" }}>
          <img
            src="https://cdn.discordapp.com/attachments/1100301796913721437/1202506060141699082/Rectangle_41.png?ex=65cdb40a&is=65bb3f0a&hm=da3869d4d81273a499c92a1d2660d1ff30a9f73790a5a3373945395ed2ef5b18&"
            style={{ width: "100%", maxHeight: "400px" }}
          />
        </Box>
        <Box style={{ padding: "30px 60px" }}>
          <Typography>
            Free Life System Private Limited (FLSPL) is established by in June
            2019. After four years of practical research with respect to market
            requirements and available sources to meet similar requirements, we
            found a huge gap due to technical knowledge and right resources
            among administrative, working persons and users. Hence, FLSPL
            introduced a technology platform to beautifully manage this distance
            in a simple and easy way. FLSPL has long garnered consistent
            customer support and praise. We provide services with excellence and
            we are a reputed and trusted name in the field of service delivery
            as per the terms and conditions decided by the entrepreneur or
            company end. We have devised the best strategies to reach the market
            and meet the basic requirement of the customers. FLSPL is a blend of
            Extensive Experience, Diverse Talent Pool and Client Centric
            Planning. FLSPL stands up to the challenges related to the ‘Everyday
            Operation’ and ‘Time Being challenges’ of a Business Process and
            dynamically upgrades itself to cope up with the rapidly changing
            ‘Market Conditions’. FLSPL is headquartered at Nagpur and is
            planning to set up its branches across India.
          </Typography>
        </Box>
      </Box>
    </>
  );
}

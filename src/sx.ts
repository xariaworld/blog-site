export const centerSx = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
} as const;

export const centeredColumnSx = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
} as const;

export const centeredTopColumnSx = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
} as const;

export const pSx = { maxWidth: "880px", fontSize: "24px", mb: 5 };

export const imgSx = {
  width: "100%",
  objectFit: "cover",
} as const;

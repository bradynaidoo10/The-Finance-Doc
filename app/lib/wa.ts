export const WA_NUMBER = "27665312978";

export const openWA = (
  msg = "Hi The Blueprint! I'd like a free financial consultation."
) => {
  if (typeof window !== "undefined") {
    window.open(
      `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  }
};

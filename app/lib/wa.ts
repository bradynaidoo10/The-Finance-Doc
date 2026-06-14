export const WA_NUMBER = "27665312978";
export const WA_EMAIL = "brady.naidoo@liblink.co.za";

const WA_MESSAGES = {
  default:        "Hi! I'd like to book my free financial health check-up with The Finance Doc.",
  diagnosis:      "Hi! I'd like a free financial health assessment from The Finance Doc.",
  lifeCover:      "Hi! I'd like a prescription for life cover.",
  disability:     "Hi! I'd like a prescription for disability cover.",
  dreadDisease:   "Hi! I'd like a prescription for dread disease cover.",
  funeral:        "Hi! I'd like a prescription for funeral cover.",
  retirement:     "Hi! I'd like a prescription for a retirement annuity.",
  tfsa:           "Hi! I'd like a prescription for a tax-free savings account.",
  education:      "Hi! I'd like a prescription for an education savings plan.",
  endowment:      "Hi! I'd like a prescription for an endowment or sinking fund.",
  medicalAid:     "Hi! I'd like help finding the right medical aid plan.",
  fullAssessment: "Hi! I'd like a full financial health assessment from The Finance Doc.",
};

export type WAKey = keyof typeof WA_MESSAGES;

export const openWA = (key: WAKey = "default") => {
  if (typeof window !== "undefined") {
    window.open(
      `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGES[key])}`,
      "_blank"
    );
  }
};

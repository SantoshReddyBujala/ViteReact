const VARIANTS = ["primary", "secondary", "tertiary"] as const;
type Variant = typeof VARIANTS[number];

type BadgeProps = {
  label: string;
  variant: Variant;
};
const Badge = ({ label, variant = "primary" }: BadgeProps) => {
  const styles: Record<Variant, React.CSSProperties> = {
    primary: {
      backgroundColor: "blue",
    },
    secondary: {
      backgroundColor: "green",
    },
    tertiary: {
      backgroundColor: "red",
    },
  };
  return <span style={styles[variant]}>{label}</span>;
};

export default Badge;

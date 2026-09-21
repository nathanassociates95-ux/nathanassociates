import { cn } from "@/lib/utils";

const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
  className,
  titleClassName,
  margin = "mb-8 md:mb-10",
}) => {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "max-w-3xl",
        margin,
        centered && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className={cn("eyebrow mb-3", centered && "justify-center")}>{eyebrow}</p>
      )}
      <h2
        className={cn(
          "text-[2rem] font-bold leading-[1.15] tracking-tight sm:text-4xl md:text-[2.5rem]",
          dark ? "text-white" : "text-gray-900",
          titleClassName,
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-3 text-base leading-relaxed md:text-lg",
            dark ? "text-gray-300" : "text-gray-600",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
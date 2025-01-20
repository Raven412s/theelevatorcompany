import gsap from "gsap";

export const AnimatePageIn = () => {
  const logoContainer = document.getElementById("logoContainer");
  const logo = document.getElementById("logo");

  if (logoContainer && logo) {
    const tl = gsap.timeline();

    tl.to(logo, {
      scale: 15, // Increase the size of the logo
      opacity: 0, // Fade the logo out
      duration: 3, // Animation duration
      ease: "power2.inOut",
    })
      .to(logoContainer, {
        opacity: 0, // Fade out the logo container
        duration: 1, // Slight delay for container fade-out
        ease: "power2.inOut",
      })
      .set(logoContainer, {
        display: "none", // Remove the logo container from the flow
      });
  }
};

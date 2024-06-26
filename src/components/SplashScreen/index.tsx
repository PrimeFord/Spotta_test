import { useEffect } from "react";
import anime from "animejs";
const SplashScreen = ({ finishLoading }: any) => {
  //   const [isMounted, setIsMounted] = useState(false);
  const animate = () => {
    const loader = anime.timeline({ complete: () => finishLoading() });
    loader
      .add({
        targets: "#logo",
        delay: 0,
        scale: 1,
        duration: 500,
        easing: "easeInOutExpo",
      })
      .add({
        targets: "#logo",
        delay: 0,
        scale: 1.25,
        duration: 500,
        easing: "easeInOutExpo",
      })
      .add({
        targets: "#logo",
        delay: 0,
        scale: 1,
        duration: 500,
        easing: "easeInOutExpo",
      })
      .add({
        targets: "#logo",
        delay: 0,
        scale: 1.25,
        duration: 500,
        easing: "easeInOutExpo",
      })
      .add({
        targets: "#logo",
        delay: 0,
        scale: 1,
        duration: 500,
        easing: "easeInOutExpo",
      });
  };
  useEffect(() => {
    // const timeout = setTimeout(() => setIsMounted(true), 10);
    animate();
    // return clearTimeout(timeout);
  }, []);
  return (
    <div className="h-screen flex justify-center items-center ">
      <img id="logo" src="/Image/logo.svg" className="w-[12rem]" />
    </div>
  );
};

export default SplashScreen;

import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
export const Hero = () => {
	return (
		<section className={styles.container}>
			<div className={styles.content}>
				<h1 className={styles.title}>Hi, I'm Goodness</h1>
				<p className={styles.description}>
					Full Stack Web Developer & Problem Solver Crafting scalable,
					user-centered solutions with tech. 3+ years experience in delivering
					high-quality web applications with Reactjs, JavaScript, Php, etc.
					<br />
					Let's Bring your digital vison to life.
				</p>
				<a href="mailto:goodnessw31@gmail.com" className={styles.contactBtn}>
					Contact Me
				</a>
			</div>
			<img
				src={getImageUrl("hero/heroImage.png")}
				alt="Hero Image o me"
				className={styles.heroImg}
			/>
			<div className={styles.topBlur} />
			<div className={styles.bottomBlur} />
		</section>
	);
};

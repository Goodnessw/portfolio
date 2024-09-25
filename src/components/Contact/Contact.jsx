import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

export const Contact = () => {
	return (
		<footer id="contact" className={styles.container}>
			<div className={styles.text}>
				<h2>Contact</h2>
				<p>Feel free to reach out!</p>
			</div>
			<ul className={styles.links}>
				<li className={styles.link}>
					<img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
					<a href="mailto:goodnessw31@gmail.com">goodnessw31@gmail.com</a>
				</li>

				<li className={styles.link}>
					<img
						src={getImageUrl("contact/linkedinIcon.png")}
						alt="Linkedin Icon"
					/>
					<a href="https://www.linkedin.com/in/goodness-williams-83a751286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
						Linkedin.com/Goodness-Williams
					</a>
				</li>

				<li className={styles.link}>
					<img src={getImageUrl("contact/githubIcon.png")} alt="Github Icon" />
					<a href="https://github.com/Goodnessw">github.com/Goodnessw</a>
				</li>
			</ul>
		</footer>
	);
};

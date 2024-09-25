import { getImageUrl } from "../../utils";

import styles from "./About.module.css";
export const About = () => {
	return (
		<section className={styles.container} id="about">
			<h2 className={styles.title}>About</h2>
			<div className={styles.content}>
				<img
					src={getImageUrl("about/aboutImage.png")}
					alt="Me witting with a laptop"
					className={styles.aboutImage}
				/>
				<ul className={styles.aboutItems}>
					<li className={styles.aboutItem}>
						<img src={getImageUrl("about/cursorIcon.png")} alt="Cursor" />
						<div className={styles.aboutItemText}>
							<h3>Frontend Developer</h3>
							<p>
								I am a frontend developer with experience in building responsive
								and optimized sites.
							</p>
						</div>
					</li>

					<li className={styles.aboutItem}>
						<img src={getImageUrl("about/serverIcon.png")} alt="Server" />
						<div className={styles.aboutItemText}>
							<h3>Backend Developer</h3>
							<p>
								I have experience developing fast and optimized back-end systems
								and APIs
							</p>
						</div>
					</li>

					<li className={styles.aboutItem}>
						<img src={getImageUrl("about/uIicon.png")} alt="UI" />
						<div className={styles.aboutItemText}>
							<h3>Wordpress Developer</h3>
							<p>
								I am a developer with experience in building responsive and
								optimized wordpress sites.
							</p>
						</div>
					</li>
				</ul>
			</div>
		</section>
	);
};

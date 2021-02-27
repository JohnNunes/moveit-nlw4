import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Profile.module.css";

export function Profile(){

    const { level } = useContext(ChallengesContext);

    return(
        <div className={styles.profileContainer}>
            <img src="https://lh3.googleusercontent.com/ogw/ADGmqu-VvF3iAulqGR4Y-nsveXUU2T92fKQEfXJkV0yYcA=s90-c-mo" alt="João Kleberson"/>
            <div>
                <strong>João Kleberson</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    );
}
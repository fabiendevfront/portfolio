import { Icon } from "@iconify/react";

const Skills = () => {
    return (
        <section className="skills">
            <div className="skills__head">
                <h2 className="skills__title">Compétences</h2>
                <Icon icon="devicon-plain:devicon" color="#17b7a1" width="50" height="50" />
            </div>
            <div className="skills__description">
                <p className="skills__paragraph">
                    En tant que développeur front-end, je sais utiliser différents langages et outils, en voici les principaux :
                </p>
            </div>
            <div className="skills__tools">
                <div className="skills__container">
                    <h3>Front-End</h3>
                    <ul className="skills__list">
                        <li className="skills__item"><Icon icon="skill-icons:react-dark" color="#17b7a1" width="40" height="40" />React</li>
                        <li className="skills__item"><Icon icon="skill-icons:javascript" color="#17b7a1" width="40" height="40" />JavaScript</li>
                        <li className="skills__item"><Icon icon="skill-icons:html" color="#17b7a1" width="40" height="40" />HTML</li>
                        <li className="skills__item"><Icon icon="skill-icons:css" color="#17b7a1" width="40" height="40" />CSS</li>
                        <li className="skills__item"><Icon icon="skill-icons:sass" color="#17b7a1" width="40" height="40" />SASS</li>
                        <li className="skills__item"><Icon icon="skill-icons:nodejs-dark" color="#17b7a1" width="40" height="40" />NodeJS</li>
                        <li className="skills__item"><Icon icon="simple-icons:npm" color="#c12127" width="40" height="40" />Npm</li>
                        <li className="skills__item"><Icon icon="skill-icons:babel" color="#17b7a1" width="40" height="40" />Babel</li>
                        <li className="skills__item"><Icon icon="skill-icons:webpack-dark" color="#17b7a1" width="40" height="40" />Webpack</li>
                        <li className="skills__item"><Icon icon="skill-icons:redux" color="#17b7a1" width="40" height="40" />Redux Toolkit</li>
                        <li className="skills__item"><Icon icon="skill-icons:jest" color="#17b7a1" width="40" height="40" />Jest</li>
                        <li className="skills__item"><Icon icon="logos:create-react-app" color="#179de3" width="40" height="40" />Create React App</li>
                        <li className="skills__item"><Icon icon="skill-icons:vite-dark" color="#17b7a1" width="40" height="40" />ViteJS</li>
                    </ul>
                </div>
                <div className="skills__container">
                    <h3>Outils</h3>
                    <ul className="skills__list">
                        <li className="skills__item"><Icon icon="skill-icons:git" color="#17b7a1" width="40" height="40" />GIT</li>
                        <li className="skills__item"><Icon icon="skill-icons:github-dark" color="#17b7a1" width="40" height="40" />GitHub</li>
                        <li className="skills__item"><Icon icon="skill-icons:gitlab-dark" color="#17b7a1" width="40" height="40" />GitLab</li>
                        <li className="skills__item"><Icon icon="skill-icons:bash-dark" color="#17b7a1" width="40" height="40" />Bash</li>
                        <li className="skills__item"><Icon icon="skill-icons:postman" color="#17b7a1" width="40" height="40" />Postman</li>
                        <li className="skills__item"><Icon icon="devicon:swagger" color="#c12127" width="40" height="40" />Swagger</li>
                        <li className="skills__item"><Icon icon="logos:lighthouse" color="#17b7a1" width="40" height="40" />LightHouse</li>
                        <li className="skills__item"><Icon icon="simple-icons:notion" width="40" height="40" />Notion</li>
                        <li className="skills__item"><Icon icon="skill-icons:vscode-dark" color="#17b7a1" width="40" height="40" />VSCode</li>
                    </ul>
                </div>
                <div className="skills__container">
                    <h3>Design</h3>
                    <ul className="skills__list">
                        <li className="skills__item"><Icon icon="skill-icons:figma-dark" color="#17b7a1" width="40" height="40" />Figma</li>
                        <li className="skills__item"><Icon icon="simple-icons:lunacy" color="#179de3" width="40" height="40" />Lunacy</li>
                        <li className="skills__item"><Icon icon="skill-icons:xd" color="#17b7a1" width="40" height="40" />Adobe XD</li>
                        <li className="skills__item"><Icon icon="skill-icons:photoshop" color="#17b7a1" width="40" height="40" />Photoshop</li>
                    </ul>
                </div>
                <div className="skills__container">
                    <h3>Back-end</h3>
                    <ul className="skills__list">
                        <li className="skills__item"><Icon icon="skill-icons:php-dark" color="#17b7a1" width="40" height="40" />PHP</li>
                        <li className="skills__item"><Icon icon="skill-icons:mongodb" width="40" height="40" />MongoDB</li>
                        <li className="skills__item"><Icon icon="skill-icons:mysql-dark" color="#17b7a1" width="40" height="40" />SQL</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Skills;
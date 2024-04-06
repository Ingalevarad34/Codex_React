function About(params) {
console.log(params);
    return (
        <div id="about">
            <img src={params.about} alt="My Image" />
        </div>
    )
}
export default About;
<template>
    <section id="offer-section">
        <h1>Why Learn Here?</h1>
        <div id="box-container">
            <div class="box">
                <h3> SIMPLE!</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus magnam aliquid repellat
                    commodi ea obcaecati, velit nulla incidunt aperiam dicta.</p>
            </div>
            <div class="box">
                <h3> EASY!</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus distinctio labore nam ipsam odit quo
                    assumenda quaerat accusamus officiis accusantium?</p>
            </div>
            <div class="box">
                <h3> FREE!</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque quod tenetur praesentium numquam,
                    officia assumenda beatae quam! Voluptatibus, quam inventore?</p>
            </div>
        </div>
    </section>
</template>


<style scoped>
#offer-section {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

#offer-section h1 {
    padding-bottom: .2em;

    font-size: 2.3em;
    font-weight: 700;
    text-decoration-line: underline;
    text-decoration-color: var(--offer-underline-title-clr);
}

#offer-section #box-container {
    width: 100%;
    max-width: 950px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

#offer-section .box {
    background-color: var(--offer-box-clr);
    width: 200px;
    padding: 20px;

    border-radius: 20px;

    text-align: center;
}

#offer-section .box h3 {
    text-decoration-line: underline;
    text-decoration-color: var(--clr-secondary);
    text-decoration-thickness: 3px;
}
</style>
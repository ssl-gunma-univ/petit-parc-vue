<template>
    <div id="app">
        <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div class="container">
                    <a class="navbar-brand" href="index.html"><i class="fas fa-dice mr-2"></i>Petit Table Game Park</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" href="index.html">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Games</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">About</a>
                            </li>
                        </ul>
                    </div>
                </div>
        </nav>

        <router-view/>
    </div>
</template>

<style lang="scss">
/* from layout.css */
html {
    font-size: 16px;
}

body {
    font-family: "Hiragino Kaku Gothic ProN", "メイリオ", sans-serif;
}

main {
    padding-top: 5rem;
}

img {
    width: 100%;
}

.back {
    padding: 1rem;
    background-color: #87CEFA;
}

.turn {
    padding: 1rem;
    background-color: #993333;
}

.mback {
    padding: 1rem;
    background-color: rgb(90, 101, 114);
}

</style>

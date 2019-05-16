<template>
        <main class="container shadow bg-white">
            <div class="jumbotron">
                <h1>Welcome to <i class="fas fa-dice mr-2"></i>Petit Table Game Park</h1>
                <hr>
                <h2>About</h2>
                <p>
                    There are some minor table games. Click a game you want to play.
                </p>
            </div>
            <div class="row">
                <div class="col-lg-4 mb-3">
                    <div class="card mx-auto" style="width: 20rem;">
                        <img src="https://pbs.twimg.com/media/C84aGQhUAAANlqj.jpg:large" class="card-img-top" alt="prairie">
                        <div class="card-body">
                            <h5 class="card-title font-weight-bold">プレーリードッグ</h5>
                            <p class="card-text">
                                <strong>Prairie Dog</strong> is a simple bluffing game in a western setting. Every player gets a card
                                showing a number of "hidden" Indians or a special value. You don't know the value of your card, but you can see all the
                                others.
                            </p>
                            <div class="clearfix">
                                <router-link to="/prairie-dog" class="btn btn-primary float-right">Play</router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 mb-3">
                    <div class="card mx-auto" style="width: 20rem;">
                        <img src="https://akiyosblog.com/wp-content/uploads/2016/01/DSC_9844.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title font-weight-bold">あんにゃもんにゃ</h5>
                            <p class="card-text">
                                <strong>あんにゃもんにゃ</strong>は、頭と手足だけの謎生物“ナンジャモンジャ”族が描かれたカードが中央の場に次々とめくられるたびに、
                                その人のセンスで特徴を捉えた名前を付け、全員で共有し、以降もし同じものがめくられたらその名前をいち早く叫んで、溜まったカードを獲得し、集めた枚数を競うゲームです。
                            </p>
                            <div class="clearfix">
                                <a href="#" class="btn btn-primary float-right">Play</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 mb-3">
                    <div class="card mx-auto" style="width: 20rem;">
                        <img src="https://images.unsplash.com/photo-1551537661-210e318af89e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title font-weight-bold">Game Title</h5>
                            <p class="card-text">
                                Description Description Description Description Description Description Description Description Description Description Description Description Description
                            </p>
                            <div class="clearfix">
                                <a href="#" class="btn btn-primary float-right">Play</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
</template>

<script>
export default {
}
</script>

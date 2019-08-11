<template>
    <div class="order">
        <div class="stepTitle">
            <h2>您的訂單已成立！</h2>
        </div>
        <div class="content">
            <dl>
                <dt>付款超商 :</dt>
                <dd>全家便利商店</dd>
                <dt>付款代碼 :</dt>
                <dd>HSD6DSK2349</dd>
                <dt>付款期限 :</dt>
                <dd>2019-08-08 23:59:59</dd>
            </dl>
            <p>* 請至您選擇之超商店內機台輸入代碼進行繳費，逾期訂單自動作廢。</p>
            <router-link :to="{ name: 'step1' }" class="btn main">返回首頁</router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.order {
    &::after {
        display: block;
        clear: both;
        content: '';
    }
}
.content {
    margin-top: 60px;
    padding: 0 66px 0 82px;
}
dl {
    margin-bottom: 40px;
}
dt {
    letter-spacing: 1.5px;
    font-size: 14px;
    line-height: 20px;
}
dd {
    letter-spacing: 2.5px;
    font-size: 24px;
    line-height: 36px;
    & + dt {
        margin-top: 32px;
    }
}
p {
    margin-bottom: 66px;
    letter-spacing: 1.5px;
    font-size: 14px;
}
.btn {
    float: right;
}

</style>
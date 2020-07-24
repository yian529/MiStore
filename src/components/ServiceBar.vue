<template>
    <div class="service-bar"> 
        <div class="container">
            <ul>
                <li><span class="icon-serve"></span>预约维修服务</li>
                <li><span class="icon-return"></span>7天无理由退货</li>
                <li><span class="icon-free"></span>15天免费换货</li>
                <li><span class="icon-postage"></span>满150元包邮</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:"serve-bar"

}
</script>

<style lang="scss" scoped>
@import '../assets/scss/mixin.scss';
.service-bar{
    padding: 33px 0;
    color: #666666;
    font-size: 16px;
    ul{
        li{
            display: inline-block;
            text-align: center;
            width: 24.9%;
            border-right: 1px solid #E5E5E5;
            span{
                display: inline-block;
                width: 20px;
                height: 20px;
                vertical-align: middle;
                margin-right: 8px;
            }
            .icon-serve{
                @include bgImg(20px,20px,'/imgs/icon-setting.png');
            }
            .icon-return{
                @include bgImg(20px,20px,'/imgs/icon-7day.png');
            }
            .icon-free{
                @include bgImg(20px,20px,'/imgs/icon-15day.png');
            }
            .icon-postage{
                @include bgImg(20px,20px,'/imgs/icon-post.png');
            }
        }
    }
}   
</style> 
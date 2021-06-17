<template>
     <div id="navbar">
        <div class="logo-box">
            <div class="icon" id="sidebar"></div>
            <div class="icon" id="logo"></div>
        </div>

        <div class="navbar-content">
            <div class="navbar-item">
                <div class="icon" id="tongquan"></div>
                <div class="navbar-text">Tổng quan</div>
            </div>

            <router-link class="navbar-item" to="/report">
                <div class="icon" id="baocao"></div>
                <div class="navbar-text">Báo cáo</div>
            </router-link>

            <div class="navbar-item">
                <div class="icon" id="muahang"></div>
                <div class="navbar-text">Mua hàng</div>
            </div>

            <router-link class="navbar-item" to="/customer">
                <div class="icon" id="khachhang"></div>
                <div class="navbar-text">Danh sách khách hàng</div>
            </router-link>

            <router-link class="navbar-item" to="/employee">
                <div class="icon" id="nhanvien"></div>
                <div class="navbar-text">Danh sách nhân viên</div>
            </router-link>

            <div class="navbar-item">
                <div class="icon" id="thietlap"></div>
                <div class="navbar-text">Thiết lập hệ thống</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import "../style/layout/navbar.css";
</style>
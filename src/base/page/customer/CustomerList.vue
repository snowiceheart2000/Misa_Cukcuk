<template>
    <div>
        <div class="customer-title">
            <div class="customer-left">Danh sách khách hàng</div>
            <div class="customer-right">
                <button id="btnAdd" class="btn-default">
                    <div class="icon" id="adding"></div>
                    <div style="margin-left: 10px">Thêm khách hàng</div>
                </button>
            </div>
        </div>
        <div class="toolbar">
            <input type="text" class="input-search" id="customerSearch" placeholder="Tìm kiếm theo mã, tên khách hàng" />
            <button id="btn-refresh"></button>
        </div>
        <div class="grid">
            <table id="tblListCustomer" class="table" width="100%" border="0">
                <thead>
                    <tr>
                        <th>Mã khách hàng</th>
                        <th>Họ và tên</th>
                        <th>Giới tính</th>
                        <th>Ngày sinh</th>
                        <th>Nhóm khách hàng</th>
                        <th>Điện thoại</th>
                        <th>Email</th>
                        <th>Số tiền nợ</th>
                        <th>Đang hoạt động</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>
        <div class="paging">
            <div data-v-a72348a4="" class="paging-bar">
                <div data-v-a72348a4="" class="paging-record-info">Hiển thị 
                    <b data-v-a72348a4="">1-10/1000</b> khách hàng
                </div>
                <div data-v-a72348a4="" class="paging-option">
                    <div data-v-a72348a4="" class="btn-select-page m-btn-firstpage">                        
                    </div>
                    <div data-v-a72348a4="" class="btn-select-page m-btn-prev-page">                       
                    </div>
                    <div data-v-a72348a4="" class="m-btn-list-page">
                        <button data-v-a72348a4="" class="btn-pagenumber btn-pagenumber-selected">1</button>
                        <button data-v-a72348a4="" class="btn-pagenumber">2</button>
                        <button data-v-a72348a4="" class="btn-pagenumber">3</button>
                        <button data-v-a72348a4="" class="btn-pagenumber">4</button>
                    </div>
                    <div data-v-a72348a4="" class="btn-select-page m-btn-next-page">                        
                    </div>
                    <div data-v-a72348a4="" class="btn-select-page m-btn-lastpage">                    
                    </div>
                </div>
                <div data-v-a72348a4="" class="paging-record-option">
                    <b data-v-a72348a4="">10</b> khách hàng/trang
                </div>
            </div>
        </div>
        <CustomerDetail/>
    </div>
</template>

<style scoped>
.customer-title {
    display: flex;
    align-items: center;
    height: 48px;
}

    .customer-title .customer-left {
        font-size: 24px;
        font-weight: bold;
    }

    .customer-title .customer-right {
        position: absolute;
        right: 24px;
    }

#adding {
    background-image: url('../../../assets/icon/add.png');
}

.toolbar {
    margin-top: 10px;
    display: flex;
    align-items: center;
    height: 48px;
}

.grid {
    margin-top: 10px;
    position: absolute;
    top: 130px;
    bottom: 48px;
    left: 24px; 
    right: 24px;
    overflow-y: auto;
}

.paging {
    position: absolute;
    left: 24px;
    right: 24px;
    bottom: 0;
    height: 48px;
}
</style>
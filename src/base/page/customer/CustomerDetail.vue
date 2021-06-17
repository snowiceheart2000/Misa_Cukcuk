<template>
    <div id="dlgCustomerDetail" class="dialog">
        <div class="model"></div>
        <div class="dialog-content">
            <div class="dialog-header">
                <div class="dialog-title">THÔNG TIN KHÁCH HÀNG</div>
                <div class="dialog-close-button">&#x2715;</div>
            </div>
            <div class="dialog-body">
                <div class="m-row">
                    <div class="m-col">
                        <label>Mã khách hàng: </label>
                        <input type="text" id="txtCustomerCode" />
                    </div>
                    <div class="m-col">
                        <label>Họ và tên: </label>
                        <input type="text" id="txtFullName" />
                    </div>
                </div>
                <div class="m-row">
                    <div class="m-col">
                        <label>Nhóm khách hàng</label>
                        <select id="cbCustomerGroup">
                            <option value="0cb5da7c-59cd-4953-b17e-c9adc9161663">Nhóm khách hàng MISA</option>
                            <option value="19165ed7-212e-21c4-0428-030d4265475f">Khách VIP</option>
                            <option value="3631011e-4559-4ad8-b0ad-cb989f2177da">Khách vãng lai</option>
                            <option value="7a0b757e-41eb-4df6-c6f8-494a84b910f4">Khách thường</option>
                        </select>
                    </div>
                </div>
                <div class="m-row">
                    <div class="m-col">
                        <label>Giới tính</label>
                        <select id='cbGender'>
                            <option value="1">Nam</option>
                            <option value="0">Nữ</option>
                            <option value="2">Không xác định</option>
                        </select>
                    </div>
                    <div class="m-col">
                        <label>Ngày sinh</label>
                        <input id="dtDateOfBirth" type="date" />
                    </div>
                </div>
                <div class="m-row">
                    <div class="m-col">
                        <label>Số điện thoại</label>
                        <input id="txtPhoneNumber" type="text" />
                    </div>
                    <div class="m-col">
                        <label>Email</label>
                        <input id="txtEmail" type="text" />
                    </div>
                </div>
            </div>
            <div class="dialog-footer">
                <button id="btnSave" class="btn-default">Lưu</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.m-row {
    position: relative;
    display: flex;
    width: 100%;
    margin-top: 8px;
    
}

    .m-row label {
        display: block;
    }

    .m-row input, select {
        margin-top: 4px;
    }

.m-col {
    width: 50%;
    float: left;
    padding: 0 4px;
    box-sizing: border-box;
}
</style>
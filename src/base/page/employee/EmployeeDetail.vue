<template>
    <div id="dlgEmployeeDetail" class="dialog" :class="{'dialog-hide':!isShow}">
        <div class="model"></div>
        <div class="dialog-content">
            <div class="dialog-header">
                <div class="dialog-title">THÔNG TIN NHÂN VIÊN</div>
                <div class="dialog-close-button" @click="btnCloseOnClick">&#x2715;</div>
            </div>
            <div class="dialog-body">
                <div id = "f-col">
                    <div id = "f-avatar"></div>
                    <div id = "f-text">(Vui lòng chọn ảnh có định dạng <br>.jpg, .jpeg, .png, .gif)</div>
                </div>
                <div id = "s-col">
                    <div class="m-row">
                        <div class="m-col">
                            <div style="padding-bottom: 8px">A. THÔNG TIN CHUNG:</div>
                            <div class="underline"></div>
                        </div>
                    </div>
                    <div class="m-row">
                        <div class="m-col">
                            <label>Mã nhân viên (<span>*</span>)</label>
                            <input type="text" id="txtEmployeeCode" v-model="employee.EmployeeCode" />
                        </div>
                        <div class="m-col">
                            <label>Họ và tên (<span>*</span>)</label>
                            <input type="text" id="txtFullName" v-model="employee.FullName" />
                        </div>
                    </div>
                    <div class="m-row">
                        <div class="m-col">
                            <label>Ngày sinh</label>
                            <input id="dtDateOfBirth" type="date" v-model="employee.DateOfBirth"/>
                        </div>
                        <div class="m-col">
                            <label>Giới tính</label>
                            <select id='cbGender' v-model="employee.Gender">
                                <option value="1">Nam</option>
                                <option value="0">Nữ</option>
                                <option value="2">Không xác định</option>
                            </select>
                        </div>
                    </div>
                    <div class="m-row">
                        <div class="m-col">
                            <label>Số CMND/ Căn cước (<span>*</span>)</label>
                            <input type="text" id="txtIdentityNumber" v-model="employee.IdentityNumber" />
                        </div>
                        <div class="m-col">
                            <label>Ngày cấp</label>
                            <input id="dtIdentityDate" type="date" v-model="employee.IdentityDate"/>
                        </div>
                    </div>
                    <div class="m-row">
                        <div class="m-col">
                            <label>Nơi cấp</label>
                            <input id="txtIdentityPlace" type="text" v-model="employee.IdentityPlace"/>
                        </div>
                    </div>
                    <div class="m-row">
                        <div class="m-col">
                            <label>Email (<span>*</span>)</label>
                            <input id="txtEmail" type="text" v-model="employee.Email"/>
                        </div>
                        <div class="m-col">
                            <label>Số điện thoại (<span>*</span>)</label>
                            <input id="txtPhoneNumber" type="text" v-model="employee.PhoneNumber"/>
                        </div>
                    </div>
                    <div class="m-row">
                        <div class="m-col">
                            <div style="padding-bottom: 8px">B. THÔNG TIN CÔNG VIỆC:</div>
                            <div class="underline"></div>
                        </div>
                    </div>
                    <div class="m-row">
                        <div class="m-col">
                            <label>Vị trí</label>
                            <select id='cbPosition' v-model="employee.PositionId">
                                <option value="3700cc49-55b5-69ea-4929-a2925c0f334d">Giám đốc</option>
                                <option value="148ed882-32b8-218e-9c20-39c2f00615e8">Nhân viên Marketing</option>
                                <option value="25c6c36e-1668-7d10-6e09-bf1378b8dc91">Thu ngân</option>
                            </select>
                        </div>
                        <div class="m-col">
                            <label>Phòng ban</label>
                            <select id='cbDepartment' v-model="employee.DepartmentId">
                                <option value="142cb08f-7c31-21fa-8e90-67245e8b283e">Phòng Marketting</option>
                                <option value="17120d02-6ab5-3e43-18cb-66948daf6128">Phòng Đào tạo</option>
                                <option value="469b3ece-744a-45d5-957d-e8c757976496">Phòng Nhân sự</option>
                                <option value="4e272fc4-7875-78d6-7d32-6a1673ffca7c">Phòng Công nghệ</option>    
                            </select>
                        </div>
                    </div>
                    <div class="m-row">
                        <div class="m-col">
                            <label>Mã số thuế cá nhân</label>
                            <input id="txtPersonalTaxCode" type="text" v-model="employee.PersonalTaxCode"/>
                        </div>
                        <div class="m-col">
                            <label>Mức lương cơ bản</label>
                            <input id="txtSalary" type="text" v-model="employee.Salary"/>
                        </div>
                    </div>
                    <div class="m-row">
                        <div class="m-col">
                            <label>Ngày gia nhập công ty</label>
                            <input id="dtJoinDate" type="date" v-model="employee.JoinDate"/>
                        </div>
                        <div class="m-col">
                            <label>Tình trạng công việc</label>
                            <select id='cbWorkStatus' v-model="employee.WorkStatus">
                                <option value="0">Đang thử việc</option>
                                <option value="1">Đang làm việc</option>
                                <option value="2">Đã nghỉ việc</option>
                                <option value="3">Đã nghỉ hưu</option>
                            </select>
                        </div>
                    </div>    
                </div>    
            </div>
            <div class="dialog-footer">
                <button id="btnCancel" class="btn-default" @click='btnCloseOnClick()'>Hủy</button>
                <button id="btnSave" class="btn-default" @click='btnSaveOnClick()'>
                    <div class="icon" id="adding2"></div>
                    <div style="margin-left: 10px">Lưu</div>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    props:{
        isShow: {
            type: Boolean,
            default: false
        },
        employee: {
            type: Object,
            default: null
        },
        formMode: {
            type: String,
            default: "add"
        }
    },

    methods: {
        // Gọi đến phương thức ẩn Dialog của cha:
        btnCloseOnClick() {
            this.$emit('hideDialog');
            this.inputEmployeeCode = true;
            this.inputFullName = true;
            this.inputIdentityNumber = true;
            this.inputEmail = true;
            this.inputPhoneNumber = true;
        },

        btnSaveOnClick() {
            console.log(this.formMode);
            if(this.formMode=="add"){
                axios.post("http://api.manhnv.net/v1/Employees", this.employee)
                .then(res =>{
                    console.log(res);
                    this.$emit('hideDialog');
                })
                .catch(res =>{
                    console.log(res);
                });
            }
            else {
                axios.put("http://api.manhnv.net/v1/Employees/"+this.employee.EmployeeId, this.employee)
                .then(res=> {
                    console.log(res);
                    this.$emit('hideDialog');
                }).catch(res=> {
                    console.log(res);
                });
            }
        }
    },

    data() {
        return {
            inputEmployeeCode: true,
            inputFullName: true,
            inputIdentityNumber: true,
            inputEmail: true,
            inputPhoneNumber: true,
        }
    }
}
</script>
<style scoped>
* {
    box-sizing: border-box;
}

#f-col {
    float: left;
    width: 24%;
    padding: 10px;
}

#f-avatar {
    height: 160px;
    width: 100%;
    background-image: url('../../../assets/img/default-avatar.jpg');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 50%;
    border: 1px solid #bbbbbb;
}

#f-text {
    margin: 10px;
    text-align: center;
}

#s-col {
    float: left;
    width: 76%;
    padding: 10px;
}

.underline {
    width: 80px;
    height: 5px;
    background-color: #01b075;
}

span {
    color: red;
}
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

#adding2 {
    background-image: url('../../../assets/icon/add.png');
}
</style>
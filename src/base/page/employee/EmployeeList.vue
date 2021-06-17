<template>
    <div>
        <div class="employee-title">
            <div class="employee-left">Danh sách nhân viên</div>
            <div class="employee-right">
                <button id="btnAdd" class="btn-default" @click="btnAddOnClick()">
                    <div class="icon" id="adding1"></div>
                    <div style="margin-left: 10px">Thêm nhân viên</div>
                </button>
            </div>
        </div>
        <div class="toolbar">
            <input type="text" class="input-search" id="employeeSearch" placeholder="Tìm kiếm theo Mã, Tên hoặc Số điện thoại" />
            <select id='department'>
                <option value="">Tất cả phòng ban</option>
                <option value="142cb08f-7c31-21fa-8e90-67245e8b283e">Phòng Marketting</option>
                <option value="17120d02-6ab5-3e43-18cb-66948daf6128">Phòng Đào tạo</option>
                <option value="469b3ece-744a-45d5-957d-e8c757976496">Phòng Nhân sự</option>
                <option value="4e272fc4-7875-78d6-7d32-6a1673ffca7c">Phòng Công nghệ</option>    
            </select>

            <select id='position'>
                <option value="">Tất cả vị trí</option>
                <option value="3700cc49-55b5-69ea-4929-a2925c0f334d">Giám đốc</option>
                <option value="148ed882-32b8-218e-9c20-39c2f00615e8">Nhân viên Marketing</option>
                <option value="25c6c36e-1668-7d10-6e09-bf1378b8dc91">Thu ngân</option>
            </select>

            <button id="btn-refresh" @click="btnRefreshOnClick()"></button>
            
            <button id="btn-delete" @click="btnDeleteOnClick()">
                <i class="far fa-trash-alt fa-lg" style="color: red;"></i>
            </button>
        </div>
        <div class="grid">
            <table id="tblListEmployee" class="table" width="100%" border="0">
                <thead>
                    <tr>
                        <th>Mã nhân viên</th>
                        <th>Họ và tên</th>
                        <th>Giới tính</th>
                        <th>Ngày sinh</th>
                        <th>Điện thoại</th>
                        <th>Email</th>
                        <th>Chức vụ</th>
                        <th>Phòng ban</th>
                        <th>Mức lương cơ bản</th>
                        <th>Tình trạng công việc</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="employee in employees" :key="employee.EmployeeId" @click="trOnClick(employee.EmployeeId, employee.EmployeeFullName)" @dblclick="trOnDblClick(employee.EmployeeId)">
                        <td>{{employee.EmployeeCode}}</td>
                        <td>{{employee.FullName}}</td>
                        <td>{{employee.GenderName}}</td>
                        <td>{{formatDateDDMMYYYY(employee.DateOfBirth)}}</td>
                        <td>{{employee.PhoneNumber}}</td>
                        <td>{{employee.Email}}</td>
                        <td>{{employee.PositionName}}</td>
                        <td>{{employee.DepartmentName}}</td>
                        <td>{{employee.Salary}}</td>
                        <td>
                            <div v-if="employee.WorkStatus === 0">Đang thử việc</div>
                            <div v-else-if="employee.WorkStatus === 1">Đang làm việc</div>
                            <div v-else-if="employee.WorkStatus === 2">Đã nghỉ việc</div>
                            <div v-else-if="employee.WorkStatus === 3">Đã nghỉ hưu</div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="paging">
            <div data-v-a72348a4="" class="paging-bar">
                <div data-v-a72348a4="" class="paging-record-info">Hiển thị 
                    <b data-v-a72348a4="">1-10/1000</b> nhân viên
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
                    <b data-v-a72348a4="">10</b> nhân viên/trang
                </div>
            </div>
        </div>
        <EmployeeDetail :isShow="isShowDialogDetail" :employee="selectedEmployee" @hideDialog="hideDialog"/>
    </div>
</template>

<script>
import EmployeeDetail from './EmployeeDetail.vue'
import axios from 'axios'

export default {
    components: {
        EmployeeDetail,
    },
    created() {
        // load dữ liệu cho trang
        axios.get("http://api.manhnv.net/v1/Employees")
        .then(res=> {
            for(let i in res.data)
            {
                if(res.data[i].Salary != null)
                res.data[i].Salary = this.formatMoney(res.data[i].Salary);
            }  
            this.employees = res.data;
        })
        .catch(res=> {
            console.log(res);
        })
    },
    props:[],
    methods: {
        // Hiện Dialog
        loadData() {
            axios.get("http://api.manhnv.net/v1/Employees")
        .then(res=> {
            for(let i in res.data)
            {
                if(res.data[i].Salary != null)
                res.data[i].Salary = this.formatMoney(res.data[i].Salary);
            }  
            this.employees = res.data;
        })
        .catch(res=> {
            console.log(res);
        })
        },

        trOnClick(EmployeeId, EmployeeFullName) {
            this.selectedEmployeeId = EmployeeId;
            this.selectedEmployeeFullName = EmployeeFullName;
            this.rowSelected = 1;
        },

        btnAddOnClick() {
            this.selectedEmployee = {};
            axios.get("http://api.manhnv.net/v1/Employees/NewEmployeeCode")
            .then(res=> res.data)
            .then(data=> {
                this.selectedEmployee.EmployeeCode = data;
                this.dialogFormMode = "add";
                this.isShowDialogDetail = true;
            })
            .catch(res=> {
                console.log(res);
            })            
        },


        btnRefreshOnClick() {
            this.loadData();
        },

        formatDateDDMMYYYY(date) {
        if (!date) {
            return "(no information)";
        }
        var newDate = new Date(date);
        var dateString = newDate.getDate();
        if (dateString < 10) {
            dateString = "0" + dateString;
        }
        var monthString = newDate.getMonth();
        if (monthString < 10) {
            monthString = "0" + monthString;
        }
        var year = newDate.getFullYear();
        return `${dateString}/${monthString}/${year}`;
        },

        formatDateDDMMYYYYForDialog(date) {
        if (date) {
            let dateStr = new Date(date);
            let dateString = dateStr.getDate();
            if (dateString < 10) {
                dateString = "0" + dateString;
            }
            let monthString = dateStr.getMonth();
            if (monthString < 10) {
                monthString = "0" + monthString;
            }
            let year = dateStr.getFullYear();
            return `${year}-${monthString}-${dateString}`;
        }
            return null;
        },

        formatMoney(money) {
            return money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.'); 
        },
        // Ẩn Dialog
        hideDialog() {
            this.isShowDialogDetail = false;
            this.loadData();
        },

        trOnDblClick(employeeId){
            //Lấy id của bản ghi đc chọn

            //Gọi api lấy thông tin của khách hàng:
            axios.get("http://api.manhnv.net/v1/Employees/"+employeeId)
            .then(res=> {
                this.selectedEmployee = res.data;

                const dateOfBirth = new Date(this.selectedEmployee.DateOfBirth); 
                this.selectedEmployee.DateOfBirth = this.formatDateDDMMYYYYForDialog(dateOfBirth);

                const identityDate = new Date(this.selectedEmployee.IdentityDate);
                this.selectedEmployee.IdentityDate = this.formatDateDDMMYYYYForDialog(identityDate);

                const joinDate = new Date(this.selectedEmployee.JoinDate);
                this.selectedEmployee.JoinDate = this.formatDateDDMMYYYYForDialog(joinDate);
            })
            .catch(res=> {
                console.log(res);
            })

            //Thực hiện binding dữ liệu lên form chi tiết

            //Cập nhật trạng thái form
            this.dialogFormMode = "edit";
            //Hiển thị dialog chi tiết
            this.isShowDialogDetail = true;
        },
        btnDeleteOnClick() {
            if (this.rowSelected == 1) {
                var result = confirm("Bạn chắc chắn muốn xóa nhân viên này không?");
            if (result) {
                axios.delete(
                    "http://api.manhnv.net/v1/employees/" + this.selectedEmployeeId
                )
                .then((res) => {
                    console.log(res);
                    this.loadData();
                })
                .catch((res) => {
                    console.log(res);
                });
            }
            }
        },
    },

    data() {
        return {
            dialogFormMode: "add",  
            isShowDialogDetail: false,
            selectedEmployee: {},
            employees: [],
            rowSelected: 0,
            isSelected: false,
        }
    },
    watch: {
        
    }
}
</script>

<style scoped>
@import "../../../assets/font/fontawesome-5.15.1/css/all.min.css";
.employee-title {
    display: flex;
    align-items: center;
    height: 48px;
}

    .employee-title .employee-left {
        font-size: 24px;
        font-weight: bold;
    }

    .employee-title .employee-right {
        position: absolute;
        right: 24px;
    }

#adding1 {
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
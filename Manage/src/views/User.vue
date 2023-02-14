<template>
    <div class="manages">
        <el-dialog title="提示" :visible.sync="dialogVisible" width="50%" :before-close="handleClose">
            <!-- 用户的表单信息 -->
            <el-form ref="form" :rules="rules" :inline="true" :model="form" label-width="80px">
                <el-form-item label="姓名" prop="name">
                    <el-input placeholder="请输入姓名" v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="年龄" prop="age">
                    <el-input placeholder="请输入年龄" v-model="form.age"></el-input>
                </el-form-item>
                <el-form-item label="性别" prop="sex">
                    <el-select v-model="form.sex" placeholder="请选择">
                        <el-option label="男" value="1"></el-option>
                        <el-option label="女" value="0"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="出生日期" prop="birth">
                    <el-date-picker v-model="form.birth" type="date" value-format="yyyy-MM-DD" placeholder="选择日期">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="地址" prop="addr">
                    <el-input placeholder="请输入地址" v-model="form.addr"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="cancel">取 消</el-button>
                <el-button type="primary" @click="submit">确 定</el-button>
            </span>
        </el-dialog>
        <div class="manage-header">
            <el-button @click="handleAdd" type="primary">
                + 新增
            </el-button>
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="name" label="姓名" width="180">
                </el-table-column>
                <el-table-column prop="sex" label="性别" width="180">
                </el-table-column>
                <el-table-column prop="age" label="年龄">
                </el-table-column>
                <el-table-column prop="birth" label="出生日期">
                </el-table-column>
                <el-table-column prop="addr" label="地址">
                </el-table-column>
                <el-table-column prop="" label="地址">
                    <template slot-scope="scope">
                        <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
                        <el-button size="danger" @click="handledelete(scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script>
import { getUSer, addUser, editUser , delUser} from '../api'
export default {
    data() {
        return {
            dialogVisible: false,
            form: {
                name: '',
                age: '',
                sex: '',
                birth: '',
                addr: ''
            },
            rules: {
                name: [
                    {
                        required: true,
                        message: '请输入姓名'
                    }
                ],
                age: [
                    {
                        required: true,
                        message: '请输入年龄'
                    }
                ],
                sex: [
                    {
                        required: true,
                        message: '请选择性别'
                    }
                ],
                birth: [
                    {
                        required: true,
                        message: '请选择生日'
                    }
                ],
                addr: [
                    {
                        required: true,
                        message: '请填写地址'
                    }
                ],
            },
            tableData: [],
            modalType: 0 //0 表示新增的弹窗， 1表示编辑
        }
    },
    methods: {
        //提交用户表单
        submit() {
            this.$refs.form.validate((valid) => {
                if (valid) {
                    //后续对表单数据的处理
                    if (this.modalType === 0) {
                        addUser(this.form).then(() => {
                            //重新获取列表的接口
                            this.getList()
                        })
                    } else {
                        editUser(this.form).then(() => {
                            this.getList()
                        })
                    }
                    //清空表单数据
                    this.$refs.form.resetFields()
                    //关闭弹窗
                    this.dialogVisible = false
                }
            })
        },
        //弹窗关闭的时候
        handleClose() {
            this.$refs.form.resetFields()
            this.dialogVisible = false
        },
        cancel() {
            this.handleClose()
        },
        handleEdit(row) {
            this.modalType = 1
            this.dialogVisible = true
            //注意需要对当前行数据进行深拷贝，否则会出错
            this.form = JSON.parse(JSON.stringify(row))
        },
        handledelete(row) {
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                delUser({ id: row.id}).then(() => {
                    this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
                 //重新获取列表的接口
                 this.getList()
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });
        },
        handleAdd() {
            this.modalType = 0
            this.dialogVisible = true
        },
        //获取列表的数据
        getList() {
            //获取的列表的数据
            getUSer().then(({ data }) => {
                console.log(data)
                this.tableData = data.list
            })
        }
    },
    mounted() {
        this.getList()
    }
}
</script>

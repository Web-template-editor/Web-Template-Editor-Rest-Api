import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/projects/project";

class EmployeeService {

 
    createProject(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }


}

export default new EmployeeService()
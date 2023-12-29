package payroll;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

import java.util.Objects;

@Entity
public class Employee {

    private @Id @GeneratedValue Long id;
    private String name;
    private String lastname;
    private String role;

    Employee(){}

    Employee(String name, String lastname, String role){
        this.name = name;
        this.lastname = lastname;
        this.role = role;
    }

    public String getName() {
        return this.name + " " + this.lastname;
    }

    public void setName(String name) {
        String[] parts = name.split(" ");
        this.name = parts[0];
        this.lastname = parts[1];
    }

    public Long getId() {
        return this.id;
    }

    public String getFirstName() {
        return this.name;
    }

    public String getLastName() {
        return this.lastname;
    }

    public String getRole() {
        return this.role;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setFirstName(String firstName) {
        this.name = firstName;
    }

    public void setLastName(String lastName) {
        this.lastname = lastName;
    }

    public void setRole(String role) {
        this.role = role;
    }
    @Override
    public boolean equals(Object o){
        if(this == o){
            return true;
        }
        if(!(o instanceof Employee)){
            return false;
        }
        Employee employee = (Employee) o;
        return Objects.equals(this.id, employee.id) && Objects.equals(this.name, employee.name)
                && Objects.equals(this.role, employee.role);
    }

    @Override
    public int hashCode(){
        return Objects.hash(this.id, this.name, this.lastname, this.role);
    }

    @Override
    public String toString(){
        return "Employee{" + "id=" + this.id + ", name='" + this.name +
                 this.lastname + "lastname='" + '\'' + "role" + this.role + '\'' + "}";
    }
}

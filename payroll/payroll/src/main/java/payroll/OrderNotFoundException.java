package payroll;

class OrderNotFoundException extends RuntimeException {

    private Long id;

    public OrderNotFoundException(Long id){
        super("Order not found with id: " + id);
        this.id = id;
    }

    public Long getId(){
        return id;
    }
}

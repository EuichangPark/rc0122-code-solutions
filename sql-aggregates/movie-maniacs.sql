select "c"."firstName", "c"."lastName", sum("amount") as "totalPayment"
  from "customers" as "c"
  join "payments" as "p" using ("customerId")
group by "customerId"
order by "totalPayment" desc

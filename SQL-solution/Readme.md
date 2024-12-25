### Problem-1

```sql
-- Correct data inconsistencies
UPDATE Admissions
SET attending_doctor_id = 14
WHERE attending_doctor_id = 6;

UPDATE Admissions
SET patient_id = 9
WHERE patient_id = 22;

-- Fetch doctors who have handled admissions
SELECT DISTINCT d.\*
FROM doctors d
JOIN admissions a ON d.doctor_id = a.attending_doctor_id;
```

### Problem-2

```sql
-- Fix associations
UPDATE Admissions
SET attending_doctor_id = 16
WHERE attending_doctor_id = 11;

UPDATE Admissions
SET patient_id = 13
WHERE patient_id = 26;

-- Find doctors with no admissions
SELECT \*
FROM doctors
WHERE doctor_id NOT IN (
SELECT DISTINCT attending_doctor_id
FROM admissions
);
```

### Problem-3

```sql
-- Update records for consistency
UPDATE Admissions
SET attending_doctor_id = 17
WHERE attending_doctor_id = 7;

UPDATE Admissions
SET patient_id = 15
WHERE patient_id = 28;

-- Find incomplete admissions
SELECT *
FROM patients
WHERE patient_id IN (
    SELECT patient_id
    FROM admissions
    WHERE attending_doctor_id NOT IN (
        SELECT doctor_id
        FROM doctors
    )
);
```

const { DataTypes } = require('sequelize');


const empMasterSchema = {
  schema: {
    emp_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
      },
    first_name: {
      type: DataTypes.STRING,
    },
    middle_name: {
      type: DataTypes.STRING,
    },
    last_name: {
      type: DataTypes.STRING,
    },
    email  : {
      type: DataTypes.STRING,
    },
    password  : {
      type: DataTypes.STRING,
    },
    role  : {
      type: DataTypes.STRING,
    },
    fathers_or_husband_name: {
      type: DataTypes.STRING,
    },
    relation: {
      type: DataTypes.STRING,
    },
    date_of_joining : {
      type: DataTypes.DATE,
    },
    job_profile : {
      type: DataTypes.STRING,
    },
    date_of_birth: {
      type: DataTypes.DATE,
    },
    marital_status: {
      type: DataTypes.STRING,
    },
    gender: {
      type: DataTypes.STRING,
    },
    nationality : {
      type: DataTypes.STRING,
    },
    primary_contact_no: {
      type: DataTypes.STRING,
    },
    emergency_contact_person: {
      type: DataTypes.STRING,
    },
    emergency_contact_relation: {
      type: DataTypes.STRING,
    },
    emergency_contact_address: {
      type: DataTypes.STRING,
    },
    emergency_contact_no: {
      type: DataTypes.STRING,
    },
    current_address : {
      type: DataTypes.STRING,
    },
    permanent_address: {
      type: DataTypes.STRING,
    },
    alternative_contact_no: {
      type: DataTypes.STRING,
    },
    personal_email_id: {
      type: DataTypes.STRING,
    },
    nominee_name: {
      type: DataTypes.STRING,
    },
    nominee_relationship: {
      type: DataTypes.STRING,
    },
    PAN: {
      type: DataTypes.STRING,
    },
    addhar_no: {
      type: DataTypes.STRING,
    },
    existing_UAN_and_EPF_no: {
      type: DataTypes.STRING,
    },
    bank_account_holder_name: {
      type: DataTypes.STRING,
    },
    bank_account_no : {
      type: DataTypes.STRING,
    },
    bank_account_type: {
      type: DataTypes.STRING,
    },
    IFSC_code: {
      type: DataTypes.STRING,
    },
    bank_name_and_branch_address: {
      type: DataTypes.STRING,
    },
    blood_group : {
      type: DataTypes.STRING,
    },
    height_in_centimeter: {
      type: DataTypes.STRING,
    },
    weight_in_kilogram: {
      type: DataTypes.STRING,
    },
      tenth_per : {
        type: DataTypes.FLOAT,
      },
      tenth_passing_year: {
        type: DataTypes.INTEGER,
    },
        
      twelveth_per : {
        type: DataTypes.STRING,
      },
      twelveth_passing_year: {
        type: DataTypes.STRING,
      },
      diploma_per: {
        type: DataTypes.STRING,
      },
      diploma_passing_year: {
        type: DataTypes.STRING,
      },
      graduation_qualification: {
        type: DataTypes.STRING,
      },
      branch : {
        type: DataTypes.STRING,
      },
      college: {
        type: DataTypes.STRING,
      },
      university : {
        type: DataTypes.STRING,
      },
      admission_year: {
        type: DataTypes.INTEGER,
      },
      year_of_passing : {
        type: DataTypes.INTEGER,
      },
      degree_per: {
        type: DataTypes.FLOAT,
      },
      aggregate : {
        type: DataTypes.FLOAT,
      },
      grade : {
        type: DataTypes.STRING,
      },
      pg_qualification: {
        type: DataTypes.STRING,
      },
      pg_branch: {
        type: DataTypes.STRING,
      },
      pg_year: {
        type: DataTypes.STRING,
      },
      pg_per : {
        type: DataTypes.STRING,
      },
      pg_aggregate  : {
        type: DataTypes.STRING,
      },
      pg_college : {
        type: DataTypes.STRING,
      },
      pg_university : {
        type: DataTypes.STRING,
      },
      CTC : {
        type: DataTypes.DECIMAL(15,3),
      },
      reporting_to: {
        type: DataTypes.INTEGER,
      },
      status  : {
        type: DataTypes.STRING,
      },
      
  }, 
  options: {
    freezeTableName: true,
    timestamps: false,
  },

};

module.exports = empMasterSchema;

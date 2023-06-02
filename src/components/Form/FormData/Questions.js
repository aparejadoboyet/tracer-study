export const question =  [
  {
    section: 1,
    items: [
      {
        label: 'First Name',
        type: 'text',
        value: 'FirstName'
      },
      {
        label: 'Surname',
        type: 'text',
        value: 'LastName'
      },
      {
        label: 'Age',
        type: 'number',
        value: 'Age'
      },
      {
        label: 'Alumni Batch',
        type: 'select',
        options: ['2023 (Undergraduate)', '2022', '2021', '2020', '2019'],
        value: 'Batch'
      },
      {
        label: 'Profile Picture',
        type: 'image',
        value: 'ProfilePicture'
      }
    ]
  },
  {
    section: 2,
    items: [
      {
        label: 'What is your current employment status?',
        type: 'select',
        options: ['', 'Employed', 'Unemployed', 'Self-Employed'],
        value: 'EmploymentStatus'
      },
      {
        label: 'How many months were you employed in your current job?',
        type: 'number',
        value: 'CurrentEmploymentDuration'
      },
      {
        label: 'Are you currently working in a field related to computer science?',
        type: 'boolean',
        options: ['Yes', 'No'],
        value: 'CourseWorkRelation'
      }
    ]
  },
  {
    section: 3,
    items: [
      {
        label: 'Did you pursue any further education after graduating from the computer science department?',
        type: 'boolean',
        options: ['Yes', 'No'],
        value: 'StudiesContinuation'
      },
      {
        label: 'Did you participate in any trainings or webinars during your studies?',
        type: 'boolean',
        options: ['Yes', 'No'],
        value: 'TrainingParticipation'
      },
      {
        label: 'Are you involved in any open-source or community projects related to computer science?',
        type: 'boolean',
        options: ['Yes', 'No'],
        value: 'ProjectsInvolvement'
      }
    ]
  },
  {
    section: 4,
      items: [
        {
          label: 'On a scale of 1 to 10, how would you rate the job placement assistance provided by the department?',
          type: 'select',
          options: [1,2,3,4,5,6,7,8,9,10],
          value: 'DeptAssitScale'
        },  
        {
          label: 'How would you rate the technical skills you acquired during your time at Osmena Colleges?',
          type: 'select',
          options: [1,2,3,4,5,6,7,8,9,10],
          value: 'SkillAcquiredScale'
        },     
    ]
  },
  {
    section: 5,
      items: [
        {
          label: 'How confident do you feel about your career prospects as a computer science graduate?',
          type: 'text-area',
          value: 'CareerConfidenceFeedback'
        },  
        {
          label: 'Give a feedback on how do you think the department can improve the schools curicullum.',
          type: 'text-area',
          value: 'DepartmentImprovementFeedback'
        },     
    ]
  },
  {
    section: 6,
      items: [
        {
          label: 'Are you ready to SUBMIT ?',
          type: 'data',
          value: 'Data'
        }     
    ]
  }
]
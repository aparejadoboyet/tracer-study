import { Form } from 'react-bootstrap';

export const FormItem = ({  item, onChange, value, imageFile, imagePreview }) => {

  switch (item.type) {
    case 'text':
      return (
        <>
          <Form.Label>{item.label}</Form.Label>
          <Form.Control
            type="text"
            id={item.label}
            value={value || ''}
            onChange={e=>onChange(e.target.value, item.value) }
          />
        </>
      );

    case 'number':
      return (
        <>
          <Form.Label>{item.label}</Form.Label>
          <Form.Control
            type="number"
            id={item.label}
            min='0'
            value={value || ''}
            onChange={e=>onChange(e.target.value, item.value) }
          />
        </>
      );

    case 'select':
      return (
        <>
          <Form.Label>{item.label}</Form.Label>
          <Form.Select
            aria-label={item.label}
            value={value || ''}
            onChange={e=>onChange(e.target.value, item.value) }
          >
            <option>Click to choose...</option>
            {item.options.map((opt, index) => (
              <option key={index} value={opt}>
                {opt}
              </option>
            ))}
          </Form.Select>
        </>
      );

      case 'boolean':
        return (
          <>
            <Form.Label>{item.label}</Form.Label>
            <div>
              {item.options.map((option, index) => (
                <Form.Check
                  key={index}
                  type="radio"
                  label={option}
                  name={item.label}
                  value={option}
                  id={`${item.label}-${option.toLowerCase()}`}
                  checked={value === option}
                  onChange={(e) => onChange(e.target.value, item.value)}
                />
              ))}
            </div>
          </>
        );

      case 'data':
      return (
        <p>{item.label}</p>
      );

      case 'text-area':
      return (
        <>
          <Form.Label>{item.label}</Form.Label>
          <div>
            <Form.Control
              as="textarea"
              placeholder="Enter answer ..."
              id={item.label}
              value={value || ''}
              onChange={e=>onChange(e.target.value, item.value) }
            />
          </div>
        </>
      );

      case 'file':
        return (
          <>
            <Form.Label>{item.label}</Form.Label>
            <Form.Control
              type="file"
              id={item.label}
              onChange={e => onChange(e.target.files[0], item.value)}
            />
          </>
        );

    default:
      return null;
  }

};

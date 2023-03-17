import Select from 'react-select';

export default function Selecter() {
  const options: any = [
    { value: 'daily', label: '일별' },
    { value: 'weekly', label: '주별' },
    { value: 'monthly', label: '월별' },
  ];
  const defaultValue = options[0];

  return (
    <>
      <Select
        styles={{
          control: (baseStyles) => ({
            ...baseStyles,
            width: '100px',
            fontSize: '14px',
            backgroundColor: '#f1f1f2',
          }),
        }}
        // id=
        className="selectStyle"
        defaultValue={defaultValue}
        options={options}
        // defaultInputValue={defaultValue}
        // defaultValue={defaultValue}
        // options={options}
      />
      <style jsx>{``}</style>
    </>
  );
}

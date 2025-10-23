import React from 'react'

interface SelectorOptionProps extends React.OptionHTMLAttributes<HTMLOptionElement> {
    label: string;
    value: string;
}

const SelectOption = ({ value, label, ...remain }: SelectorOptionProps) => {
    return (
        <option value={value} {...remain}>
            {label}
        </option>
    )
}

export default SelectOption
export const customStyles = {
    control: styles => ({
        ...styles,
        height: 43,
        borderRadius: "0.375rem",
        fontSize: ".875rem"

    }),
    singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';

        return { ...provided, opacity, transition };
    }
}
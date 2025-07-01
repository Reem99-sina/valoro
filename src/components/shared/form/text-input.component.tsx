'use client';

import { HideEye, MandatoryIcon, ShowEye } from '@/assets/icon';

import clsx from 'clsx';
import React, { FC, ReactNode, useState } from 'react';

interface Props {
  errorMessage?: string;
  label?: string;
  inputProps?: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  onChangeText?: (text: string) => void;
  leftIcon?: React.ReactNode;
  mandatoryIcon?: boolean;
  className?: string;
  disabled?: boolean;
  children?: ReactNode;
}

export const TextInput: FC<Props> = ({
  label,
  inputProps = {},
  errorMessage,
  mandatoryIcon,
  leftIcon,
  disabled,
  className,
  children,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  return (
    <div className=''>
      {label && (
        <label
          className={clsx(
            'dark:text-text-dark mb-2  flex items-center gap-x-2 text-xs font-bold capitalize text-black ',
            errorMessage && 'dark:text-error-dark text-error',
          )}
        >
          {label}
          {mandatoryIcon && <MandatoryIcon />}
        </label>
      )}

      <div className='relative flex h-full items-center'>
        <div
          className={clsx(
            'absolute  top-1/2 -translate-y-1/2 transform cursor-pointer p-3'
           
          )}
          onClick={
            inputProps.type === 'password'
              ? togglePasswordVisibility
              : undefined
          }
        >
          {inputProps.type === 'password' &&
            (showPassword ? <HideEye /> : <ShowEye />)}
          {leftIcon ? leftIcon : null}
        </div>
        <input
          {...inputProps}
          type={
            !showPassword && inputProps.type === 'password'
              ? 'password'
              : showPassword && inputProps.type === 'password'
              ? 'text'
              : inputProps.type != 'password'
              ? inputProps.type
              : 'text'
          }
          disabled={disabled}
          style={{
            fontFamily: 'Verdana',
          }}
          className={clsx(
            disabled ? 'bg-bg3' : 'bg-white',
            'text-secondary3 block  min-h-[40px]  w-full p-2.5 py-0 text-sm font-black',
            `border ${
              errorMessage ? 'border-error' : 'border-[#E2E2E2]'
            } rounded-md `,
            'placeholder:!text-xs placeholder:font-light',
            `${
              className ? className : 'rounded-lg  px-4'
            } focus-visible:outline-0`,
          )}
        />
      </div>
      {children}
      {errorMessage && (
        <p className='min-h-2 mb-2 whitespace-normal break-words text-xs text-red-600 dark:text-red-500'>
          {errorMessage}
        </p>
      )}
    </div>
  );
};

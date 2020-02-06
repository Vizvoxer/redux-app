import React from 'react';
import { Input } from 'antd';

export default function CharacterForm() {
    return (
        <form>
            <Input  placeholder="Enter name"/>
            <Input  placeholder="Enter gender"/>
            <Input  placeholder="Enter culture"/>
        </form>
    )
}

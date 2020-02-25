import React from 'react';

const Form = () => {
    return (
        <div>
            <form>
                <input
                    type="text"
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
            </form>
        </div>
    )
}
import React from 'react';
import { gql } from '@apollo/client';
import createDecorator from 'final-form-focus';
import arrayMutators from 'final-form-arrays';
import { FieldArray } from 'react-final-form-arrays';

import { Col, Row } from '../../../../App';
import Flex from '../../../../App/Components/Layout/Flex';
import { Form, Field, TextField } from '../../../../App/Components/Forms';
import Heading from '../../../../App/Components/Text/Heading';
import { P } from '../../../../App/Components/Text/P';
import Button from '../../../../App/Components/Buttons/Button';
import { DatePicker } from '../../../../App/';
import Link from '../../../../App/Components/Navigation/Link';
import { paths as appPaths } from '../../../../App';
import { paths as backofficePaths } from '../../../../Backoffice';
import ItemSelector from './ItemSelector';
import {
  atLeastFiveCharacters,
  onlyAlphanumeric,
  composeValidators,
  onlyAmounts,
  onlyPositiveNumbers,
  required,
} from '../../../../App/Components/Forms/validators';
import { RadioField } from '../../../../App/Components/Forms';
import { parseToInt } from '../../../../App/Components/Forms/utils';
import {
  transformSubmitValues,
  createEmptyVoucher,
  formatInitialValues,
} from './dataUtils';
import { CODE, GLOBAL_CODE, GLOBAL_AUTO } from './VoucherType';

const focusOnError = createDecorator();
export const DISCOUNT_PERCENTAGE = 'discountPercentage';
export const DISCOUNT_AMOUNT = 'discountAmount';
export const FORM_VOUCHERS = 'formVouchers';

interface VoucherFormProps {
  onSubmit: (values: any) => void;
  initialValues?: any;
  type: string;
  enableDelete?: boolean;
  enableAddMore?: boolean;
}
const VoucherForm = ({
  onSubmit,
  initialValues,
  type,
  enableDelete = false,
  enableAddMore = false,
}: VoucherFormProps) => {
  const formatedInitialValues = formatInitialValues(initialValues);
  const { item } = formatedInitialValues;

  return (
    <>
      <Form
        mutators={arrayMutators}
        onSubmit={transformSubmitValues(onSubmit, {
          extraValues: { type },
        })}
        initialValues={formatedInitialValues}
        decorators={[focusOnError]}
      >
        {({ submitting, pristine, form }: any) => (
          <>
            <Flex flexDirection="column">
              {type !== GLOBAL_CODE && type !== GLOBAL_AUTO && (
                <>
                  <Heading variant="h6" mt={4}>
                    Which training, instance, or event will this discount apply
                    to?
                  </Heading>
                  <Field
                    name="item"
                    item={item}
                    component={ItemSelector}
                    validate={required}
                  />
                </>
              )}

              <FieldArray name={FORM_VOUCHERS}>
                {({ fields }) => (
                  <>
                    {fields.map((name, index) => (
                      <React.Fragment key={name}>
                        <Field
                          name={`${name}.description`}
                          component={TextField}
                          label="Name of discount"
                          type="text"
                          placeholder="eg. 30% off"
                          validate={composeValidators(
                            atLeastFiveCharacters,
                            required
                          )}
                        />
                        {(type === CODE || type === GLOBAL_CODE) &&
                          (!initialValues || !initialValues.id) && (
                            <Field
                              name={`${name}.code`}
                              component={TextField}
                              label="Unique discount code"
                              type="text"
                              placeholder="Only letters or numbers"
                              validate={composeValidators(
                                onlyAlphanumeric,
                                required
                              )}
                              small
                            />
                          )}
                        <Row>
                          <Col md={4}>
                            <Field
                              name={`${name}.startsAt`}
                              component={DatePicker}
                              label="Starts:"
                            />
                          </Col>
                          <Col md={4}>
                            <Field
                              name={`${name}.expiresAt`}
                              component={DatePicker}
                              label="Ends:"
                            />
                          </Col>
                        </Row>
                        <Flex>
                          <Flex flexDirection="column">
                            <Field
                              label="Discount amount"
                              component={TextField}
                              name={`${name}.voucherValue`}
                              validate={composeValidators(
                                onlyAmounts,
                                required
                              )}
                              type="text"
                              placeholder="% or £"
                              parse={parseToInt}
                            />
                          </Flex>
                          <Flex
                            flexDirection="column"
                            justifyContent="flex-end"
                          >
                            <Field
                              name={`${name}.voucherMode`}
                              component={RadioField}
                              type="radio"
                              value={DISCOUNT_PERCENTAGE}
                              label="% - Percentage"
                            />
                            {/* <Field
                                name={`${name}.voucherMode`}
                                component={RadioField}
                                type="radio"
                                value={DISCOUNT_AMOUNT}
                                label="£ - Specific amount"
                              />
                             */}
                          </Flex>
                        </Flex>

                        <Field
                          name={`${name}.maxRedemptions`}
                          validate={composeValidators(onlyPositiveNumbers)}
                          label="Maximum amount of redemptions"
                          type="text"
                          small
                          placeholder="eg. 10"
                          component={TextField}
                          parse={parseToInt}
                        />
                        {enableDelete && (
                          <P mt={2} mb={2}>
                            <Link onClick={() => fields.remove(index)}>
                              Delete
                            </Link>
                          </P>
                        )}
                        <hr />
                      </React.Fragment>
                    ))}
                    <Flex>
                      <Button
                        disabled={pristine || submitting}
                        variant="tertiary"
                        type="submit"
                        loading={submitting}
                      >
                        Save all and go to discounts
                      </Button>
                      {enableAddMore && (
                        <Button
                          ml={2}
                          disabled={submitting}
                          variant="tertiary"
                          onClick={() =>
                            form.mutators.push(
                              FORM_VOUCHERS,
                              createEmptyVoucher(fields)
                            )
                          }
                        >
                          Add another discount
                        </Button>
                      )}

                      <Link
                        ml={2}
                        disabled={!pristine || submitting}
                        button
                        to={`${appPaths.backoffice}${backofficePaths.payment}${backofficePaths.voucher}`}
                      >
                        Go to discounts
                      </Link>
                    </Flex>
                  </>
                )}
              </FieldArray>
            </Flex>
          </>
        )}
      </Form>
    </>
  );
};

export const VOUCHER_FORM_FRAGMENT = gql`
  fragment VoucherFormFragment on Voucher {
    id
    trainingId
    maxRedemptions
    createdAt
    startsAt
    expiresAt
    type
  }
`;

export default React.memo(VoucherForm);

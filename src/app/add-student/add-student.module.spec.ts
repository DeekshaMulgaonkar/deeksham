import { AddStudentModule } from './add-student.module';

describe('AddStudentModule', () => {
  let addStudentModule: AddStudentModule;

  beforeEach(() => {
    addStudentModule = new AddStudentModule();
  });

  it('should create an instance', () => {
    expect(addStudentModule).toBeTruthy();
  });
});
